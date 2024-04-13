import React, { useEffect, useRef, useState } from "react";

import {
  ListItem,
  Grid,
  List,
  Input,
  IconButton,
  Dialog,
  DialogContent,
} from "@mui/material";
import i18next from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { MentionsInput, Mention } from "react-mentions";
import EmojiPicker from "emoji-picker-react";
import moment from "moment";
import ClearIcon from "@material-ui/icons/Clear";
import { Link } from "@mui/material";
import { isMobile } from "react-device-detect";
import ReactGiphySearchbox from "react-giphy-searchbox";
import { toast } from "react-hot-toast";

import session from "../../utils/session";
import useStyles from "./ChatBox.styles";
import { toggleChatBox } from "../../redux-saga/redux/settings/themeSettings";
import {
  getUserListStart,
  updateUnseenCountStart,
} from "../../redux-saga/redux/chatbox";
import {
  getHighlightedMention,
  replaceMentionWithValue,
} from "../../utils/helper";
import { useSendMessage } from "../../services/webSocket/sendMessage";
import { FilterHacked } from "../../utils/filterBadWords";
import ChatRules from "./chatRules";
import Modal from "../../hoc/modal/Modal";

const ChatBox = () => {
  let customFilter = new FilterHacked();
  customFilter.removeWords("hells", "sadist", "hell");
  const dispatch = useDispatch();
  const classes = useStyles();
  const [showPickerr, setShowPickerr] = useState(false);
  const [previousChats, setPreviousChats] = useState([]);
  const [userId, setUserId] = useState("");
  const [sendMessage, sendMessageLoading] = useSendMessage();
  const [activeUsers, setActiveUsers] = useState([]);
  const [unseenCount, setUnseenCount] = useState(0);
  const messagesEndRef = React.createRef();
  const submitRef = React.createRef();
  const inputRef = useRef();
  const [message, setMessage] = useState("");
  const [messageTyp, setMessageTyp] = useState("text");
  const [file, setFile] = useState(null);
  const [showGIPFY, setShowGIPFY] = useState(false);
  const [chatRule, setChatRule] = useState(false);
  const [preview, setPreview] = useState(null);
  const { userList, chatList, newMessageByWS, unseenMsg, activeUsersCount } =
    useSelector((state) => state.chatbox);
  const { darkMode, isChatBoxOpen } = useSelector(
    (state) => state.themeSettings
  );
  const { isLoggedIn } = useSelector((state) => state.authentication);

  const handleOnKeyDownInput = (event) => {
    if (event.key === "Enter") {
      event?.preventDefault();
      submitRef?.current?.click();
    }
  };
  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };
  useEffect(() => {
    if (isChatBoxOpen && unseenCount > 0) {
      dispatch(updateUnseenCountStart());
    }
  }, [isChatBoxOpen, unseenCount]);
  useEffect(() => {
    const newMentionCount = unseenMsg;
    if (newMentionCount && isChatBoxOpen) {
      dispatch(updateUnseenCountStart());
    } else if (newMentionCount) setUnseenCount(newMentionCount);
  }, [unseenMsg]);

  useEffect(() => {
    if (previousChats?.length) {
      scrollToBottom();
    }
  }, [previousChats?.length, previousChats, isChatBoxOpen]);

  const fetchUserListUpdated = (search) => {
    dispatch(getUserListStart({ search }));
    return activeUsers;
  };

  useEffect(() => {
    fetchUserListUpdated("");
  }, []);

  useEffect(() => {
    setActiveUsers(
      userList?.map((state) => ({
        id: state?.id,
        display: `${state?.user_name}`,
      }))
    );
  }, [userList]);

  useEffect(() => {
    setUnseenCount(unseenMsg);
  }, [unseenMsg]);

  useEffect(() => {
    const user = session?.getSessionCred;
    setUserId(user?.userId);
  }, []);

  useEffect(() => {
    if (Object?.keys(newMessageByWS)?.length) {
      setPreviousChats((prev) => [...prev, newMessageByWS]);
    }
  }, [newMessageByWS]);
  const handleChatRules = () => {
    setChatRule((s) => !s);
  };

  useEffect(() => {
    setPreviousChats(chatList);
  }, [chatList]);

  const handleGIPHYSelect = async (url) => {
    setMessageTyp("file");
    const response = await fetch(url?.images?.fixed_height_downsampled?.url);
    setPreview(url?.images?.fixed_height_downsampled?.url);
    const blob = await response?.blob();
    setFile(blob);
    setShowGIPFY(false);
  };

  const onEmojiClick = (event, emojiObject) => {
    setMessage((prevInput) => prevInput + event?.emoji);
    setShowPickerr(false);
    inputRef?.current?.focus();
  };
  const handleChatBox = () => {
    dispatch(toggleChatBox(!isChatBoxOpen));
  };
  const handleSendMessage = async () => {
    if (messageTyp === "text") {
      const trimmedMsg = message.trim();
      if (trimmedMsg?.length) {
        try {
          await sendMessage({
            message: trimmedMsg,
            messageType: messageTyp,
            language: i18next.language || "en",
            userId,
          });
          setMessage("");
        } catch (error) {
          console.log("error  while sending message ", error);
        }
      }
    } else if (messageTyp === "file") {
      if (file) {
        try {
          await sendMessage({
            message: file,
            messageType: messageTyp,
            language: i18next?.language || "en",
            userId,
          });
          setFile("");
          setPreview(null);
        } catch (error) {
          console.log("error  while sending message ", error);
        }
      }
    }
  };

  const handleFileChange = (event) => {
    setMessageTyp("file");
    const selectedFile = event?.target?.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleButtonClick = () => {
    setShowGIPFY(true);
  };

  const handleClearClick = () => {
    setMessageTyp("text");
    setFile(null);
    setPreview(null);
  };

  const modifyMessage = (message) => {
    const msg = replaceMentionWithValue(
      message || "We are winning the lottery but from two different sides!"
    );
    return getHighlightedMention(msg);
  };

  return !isMobile ? (
    isLoggedIn ? (
      isChatBoxOpen ? (
        <section className={classes.chatBoxWrapper}>
          <Grid
            className={classes.chatBoxHeading}
            display="flex"
            alignItems={"center"}
          >
            {unseenCount > 0 && (
              <div className={classes.chatCount}>
                <span>{unseenCount || 0}</span>
              </div>
            )}
            <Link onClick={handleChatBox}>
              <img
                src="/images/toggle-icon.svg"
                alt="toggle icon"
                className={classes.sidebarToggleIconClose}
              />
            </Link>
            <Grid
              className={classes.chatHeading}
              display="flex"
              alignItems={"center"}
            >
              Global Chat
              <span>
                <img src="/images/arrow-d.svg" alt="arrow down" />
              </span>
            </Grid>

            <Grid
              className={classes.userNumber}
              display="flex"
              alignItems={"center"}
            >
              <b>{activeUsersCount || 0}</b>
              {darkMode ? (
                <>
                  <span>
                    <img src="/images/chat-icon.svg" alt="arrow down" />
                  </span>

                  {isMobile && (
                    <Link onClick={handleChatBox}>
                      <img
                        src="/images/mob-chat-close.svg"
                        alt="mob-chat-close"
                      />
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <span>
                    <img src="/images/arrow-square-left.svg" alt="arrow down" />
                  </span>

                  {isMobile && (
                    <Link onClick={handleChatBox}>
                      <img
                        src="/images/mob-chat-close.svg"
                        alt="mob-chat-close"
                      />
                    </Link>
                  )}
                </>
              )}
            </Grid>
          </Grid>
          <div className={classes.scrollCustom}>
            <Grid className={classes.chatMessageGroup}>
              {previousChats?.map((user, index) => (
                <Grid
                  key={`${user?.userId}${user?.messageData?.message}${index}`}
                  className={
                    user.userId === userId
                      ? classes.chatMessage
                      : classes.chatMessageMine
                  }
                >
                  <Grid className={classes.profileImage}>
                    <span className={classes.userBorder}>
                      <img
                        src={user.profileImage || "/images/casino-banner-2.png"}
                        alt="player-icon"
                      />
                    </span>

                    <span className={classes.userProfileLevel}>
                      {user?.userLevelId}
                    </span>
                  </Grid>
                  <Grid className={classes.message}>
                    <p className={classes.userNameTime}>
                      <span>{user?.userName || "Ngin"}</span>
                      <span>
                        {moment(
                          user?.dateTime || "2023-04-13T07:38:19.125Z"
                        ).format("MMM DD h:mm A") || "1:12PM"}
                      </span>
                    </p>
                    {user?.messageData?.messageType === "text" && (
                      <p className={classes.userParagraph}>
                        {modifyMessage(user?.messageData?.message)}
                      </p>
                    )}
                    {user?.messageData?.messageType === "file" && (
                      <img
                        style={{ maxWidth: "100px", maxHieght: "100px" }}
                        src={user?.messageData?.message || "/images/bunny.avif"}
                        alt="gif"
                      ></img>
                    )}
                  </Grid>
                </Grid>
              ))}
              {previousChats?.length === 0 && (
                <Grid className={classes.Nochats}>No chats Found 🥲</Grid>
              )}
            </Grid>
            <div ref={messagesEndRef} />
          </div>
          <Grid key="chatbox" className={classes.chatBoxFooter}>
            <Grid key="chatbox2" className={classes.footerInput}>
              <Dialog
                open={showGIPFY}
                onClose={() => setShowGIPFY(false)}
                className={classes.dropShadow}
              >
                <ReactGiphySearchbox
                  apiKey={process.env.REACT_APP_GIFY_API_KEY}
                  onSelect={(item) => handleGIPHYSelect(item)}
                  masonryConfig={[
                    { columns: 2, imageWidth: 110, gutter: 5 },
                    { mq: "700px", columns: 3, imageWidth: 120, gutter: 5 },
                  ]}
                />
              </Dialog>
              <Dialog
                open={showPickerr}
                onClose={() => setShowPickerr(false)}
                className={classes.dropShadow}
              >
                <EmojiPicker
                  skinTonesDisabled
                  height={"260px"}
                  width={"298px"}
                  theme="light"
                  className={classes.picker}
                  disableAutoFocus={true}
                  previewConfig={{
                    showPreview: false,
                    showSuggested: false,
                    showFrequent: false,
                  }}
                  onEmojiClick={onEmojiClick}
                />
              </Dialog>
              {!preview && (
                <MentionsInput
                  className="comments-textarea"
                  placeholder="Type your message"
                  value={message}
                  onChange={(e) => {
                    setMessageTyp("text");
                    if (e?.target?.value && e?.target?.value?.length > 100) {
                      toast.error(
                        "Oops! Seems like your message is too long ",
                        { id: "messgaeLength" }
                      );
                      return;
                    }
                    if (e?.target?.value) {
                      setMessage(customFilter?.cleanHacked(e?.target?.value));
                    } else setMessage("");
                    inputRef?.current?.focus();
                  }}
                  a11ySuggestionsListLabel={"Suggested mentions"}
                  onKeyDown={handleOnKeyDownInput}
                  key="message"
                  inputRef={inputRef}
                >
                  <Mention
                    trigger="@"
                    style={{
                      backgroundColor: "red",
                    }}
                    data={fetchUserListUpdated}
                    displayTransform={(_id, display) => {
                      return `@${display} `;
                    }}
                  />
                </MentionsInput>
              )}
              {preview && (
                <div className={classes.previewContainer}>
                  <IconButton
                    className={classes.closeButton}
                    onClick={handleClearClick}
                  >
                    <ClearIcon />
                  </IconButton>
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className={classes.previewImage}
                    />
                  ) : (
                    <p>Unsupported file type</p>
                  )}
                </div>
              )}
              <Grid className={classes.searchIcons}>
                {!preview && (
                  <Link
                    onClick={() => {
                      setShowPickerr(true);
                    }}
                  >
                    <img src="/images/emoji-icon.svg" alt="emoji" />
                  </Link>
                )}
                <Link onClick={handleButtonClick}>
                  <img src="/images/gif-icon.svg" alt="" id="outputBack" />
                </Link>
                <span>
                  {sendMessageLoading ? (
                    <Link disabled ref={submitRef} onClick={handleSendMessage}>
                      <img
                        className={classes.disbled}
                        src="/images/load.gif"
                        alt="sending"
                      />
                    </Link>
                  ) : (
                    <Link ref={submitRef} onClick={handleSendMessage}>
                      <img src="/images/sent-icon.svg" alt="sent" />
                    </Link>
                  )}
                </span>
              </Grid>
            </Grid>
            <p>
              Before chatting learn about our{" "}
              <Link onClick={handleChatRules}>chat rules</Link>
            </p>
            <div className={classes.root}>
              <Input
                id="file-input"
                type="file"
                onChange={handleFileChange}
                className={classes.input}
              />
            </div>
          </Grid>
          <Modal
            isShowing={chatRule}
            className={classes.dialogcontainer}
            content={
              <DialogContent>
                <ChatRules handleChatRules={handleChatRules} />
              </DialogContent>
            }
            hide={handleChatRules}
          />
        </section>
      ) : (
        <>
          {!isMobile && (
            <div>
              <section className={classes.chatBoxCloseBotton}>
                {unseenCount > 0 && (
                  <div className={classes.chatCount}>
                    <span>{unseenCount || 0}</span>
                  </div>
                )}
                <List>
                  <ListItem
                    onClick={handleChatBox}
                    className={classes.chatToggle}
                  >
                    <img src="/images/toggle-icon.svg" alt="toggle icon" />
                  </ListItem>
                </List>
              </section>
            </div>
          )}
        </>
      )
    ) : (
      <></>
    )
  ) : isLoggedIn ? (
    isChatBoxOpen && (
      <Grid className={classes.mobChatPannel}>
        <section className={classes.chatBoxWrapper}>
          <Grid
            className={classes.chatBoxHeading}
            display="flex"
            alignItems={"center"}
          >
            <Link onClick={handleChatBox}>
              <img
                src="/images/toggle-icon.svg"
                alt="toggle icon"
                className={classes.sidebarToggleIconClose}
              />
            </Link>
            <Grid
              className={classes.chatHeading}
              display="flex"
              alignItems={"center"}
            >
              Global Chat
              <span>
                <img src="/images/arrow-d.svg" alt="arrow down" />
              </span>
            </Grid>

            <Grid
              className={classes.userNumber}
              display="flex"
              alignItems={"center"}
            >
              <b>{activeUsersCount || 0}</b>
              {darkMode ? (
                <>
                  <span>
                    <img src="/images/chat-icon.svg" alt="arrow down" />
                  </span>

                  {isMobile && (
                    <Link onClick={handleChatBox}>
                      <img
                        src="/images/mob-chat-close.svg"
                        alt="mob-chat-close"
                      />
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <span>
                    <img src="/images/arrow-square-left.svg" alt="arrow down" />
                  </span>

                  {isMobile && (
                    <Link onClick={handleChatBox}>
                      <img
                        src="/images/mob-chat-close.svg"
                        alt="mob-chat-close"
                      />
                    </Link>
                  )}
                </>
              )}
            </Grid>
          </Grid>
          <div className={classes.scrollCustom}>
            <Grid className={classes.chatMessageGroup}>
              {previousChats?.map((user, index) => (
                <Grid
                  key={`${user?.userId}${user?.messageData?.message}${index}`}
                  className={
                    user.userId === userId
                      ? classes.chatMessage
                      : classes.chatMessageMine
                  }
                >
                  <Grid className={classes.profileImage}>
                    <span className={classes.userBorder}>
                      <img
                        src={user.profileImage || "/images/casino-banner-2.png"}
                        alt="player-icon"
                      />
                    </span>
                    <span className={classes.userProfileLevel}>
                      {user?.userLevelId}
                    </span>
                  </Grid>
                  <Grid className={classes.message}>
                    <p className={classes.userNameTime}>
                      <span>{user?.userName || "Ngin"}</span>
                      <span>
                        {moment(
                          user?.dateTime || "2023-04-13T07:38:19.125Z"
                        ).format("MMM DD h:mm A") || "1:12PM"}
                      </span>
                    </p>
                    {user?.messageData?.messageType === "text" && (
                      <p className={classes.userParagraph}>
                        {modifyMessage(user?.messageData?.message)}
                      </p>
                    )}
                    {user?.messageData?.messageType === "file" && (
                      <img
                        style={{ maxWidth: "100px", maxHieght: "100px" }}
                        src={user?.messageData?.message || "/images/bunny.avif"}
                        alt="gif"
                      ></img>
                    )}
                  </Grid>
                </Grid>
              ))}
            </Grid>
            <div ref={messagesEndRef} />
          </div>
          <Grid key="chatbox" className={classes.chatBoxFooter}>
            <Grid key="chatbox2" className={classes.footerInput}>
              <Dialog
                open={showGIPFY}
                onClose={() => setShowGIPFY(false)}
                className={classes.dropShadow}
              >
                <ReactGiphySearchbox
                  apiKey={
                    process.env.GIFY_API_KEY ||
                    "dJqz97Qx99lnUooxTKr5GuoSEI86Hl9A"
                  }
                  onSelect={(item) => handleGIPHYSelect(item)}
                  masonryConfig={[
                    { columns: 2, imageWidth: 80, gutter: 5 },
                    { mq: "700px", columns: 3, imageWidth: 80, gutter: 5 },
                  ]}
                />
              </Dialog>
              <Dialog
                open={showPickerr}
                onClose={() => setShowPickerr(false)}
                className={classes.dropShadow}
              >
                <EmojiPicker
                  skinTonesDisabled
                  height={"260px"}
                  width={"298px"}
                  theme="light"
                  className={classes.picker}
                  disableAutoFocus={true}
                  previewConfig={{
                    showPreview: false,
                    showSuggested: false,
                    showFrequent: false,
                  }}
                  onEmojiClick={onEmojiClick}
                />
              </Dialog>
              {!preview && (
                <MentionsInput
                  className="comments-textarea"
                  placeholder="Type your message"
                  value={message}
                  onChange={(e) => {
                    setMessageTyp("text");
                    if (e?.target?.value && e?.target?.value?.length > 100) {
                      toast.error(
                        "Oops! Seems like your message is too long ",
                        { id: "messgaeLength" }
                      );
                      return;
                    }
                    if (e?.target?.value) {
                      setMessage(customFilter?.cleanHacked(e?.target?.value));
                    } else setMessage("");
                    inputRef?.current?.focus();
                  }}
                  a11ySuggestionsListLabel={"Suggested mentions"}
                  onKeyDown={handleOnKeyDownInput}
                  key="message"
                  inputRef={inputRef}
                >
                  <Mention
                    trigger="@"
                    style={{
                      backgroundColor: "red",
                    }}
                    data={(search) => {
                      dispatch(getUserListStart({ search }));
                      return activeUsers;
                    }}
                    displayTransform={(_id, display) => {
                      return `@${display} `;
                    }}
                  />
                </MentionsInput>
              )}
              {preview && (
                <div className={classes.previewContainer}>
                  <IconButton
                    className={classes.closeButton}
                    onClick={handleClearClick}
                  >
                    <ClearIcon />
                  </IconButton>
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className={classes.previewImage}
                    />
                  ) : (
                    <p>Unsupported file type</p>
                  )}
                </div>
              )}
              <Grid className={classes.searchIcons}>
                {!preview && (
                  <Link
                    onClick={() => {
                      setShowPickerr(true);
                    }}
                  >
                    <img src="/images/emoji-icon.svg" alt="emoji" />
                  </Link>
                )}
                <Link onClick={handleButtonClick}>
                  <img src="/images/gif-icon.svg" alt="" id="outputBack" />
                </Link>
                <span>
                  {sendMessageLoading ? (
                    <Link disabled ref={submitRef} onClick={handleSendMessage}>
                      <img
                        className={classes.disbled}
                        src="/images/load.gif"
                        alt="sending"
                      />
                    </Link>
                  ) : (
                    <Link ref={submitRef} onClick={handleSendMessage}>
                      <img src="/images/sent-icon.svg" alt="sent" />
                    </Link>
                  )}
                </span>
              </Grid>
            </Grid>
            <p>
              Before chatting learn about our{" "}
              <Link onClick={handleChatRules}>chat rules</Link>
            </p>
            <div className={classes.root}>
              <Input
                id="file-input"
                type="file"
                onChange={handleFileChange}
                className={classes.input}
              />
            </div>
          </Grid>
          <Modal
            isShowing={chatRule}
            className={classes.dialogcontainer}
            content={
              <DialogContent>
                <ChatRules handleChatRules={handleChatRules} />
              </DialogContent>
            }
          />
        </section>
      </Grid>
    )
  ) : (
    <></>
  );
};

export default ChatBox;
