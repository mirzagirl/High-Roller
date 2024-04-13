import React from "react";
/**
 * To check the email validation
 * @function validateEmail
 *
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  const validate = String(email).match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  return !!validate;
};

/**
 * To check the name validation
 * @function validateName
 *
 * @param {string} email
 * @returns {boolean}
 */
export function validateName(name) {
  // Use regex to check if the name contains only letters and has a length of 1-10
  const regex = /^[a-zA-Z\s]{1,20}$/;

  // Return true if the name matches the regex pattern, otherwise return false
  return regex.test(name);
}
/**
 * To check if two passwords match
 *
 * @param {string} password
 * @param {string} confirmPassword
 * @returns
 */
export const isMatchPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

/**
 * To check if password must be at least 4 characters long
 * must start with a letter (uppercase or lowercase),
 * at least one uppercase letter, one lowercase letter, and one digit.
 * can contain special character
 * @param {string} password
 * @returns {boolean}
 */
export const validatePassword = (password) => {
  const validate = String(password).match(
    /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z][A-Za-z0-9 !"#$%&'()*+,-.\\/:;<=>?@[\]^_`{|}~]{3,}$/
  );
  return !!validate;
};
/**
 * To check confirm password is same as password
 *
 * @returns {boolean}
 */
export const validateConfirmPassword = (password, confirmPassword) => {
  const validate = confirmPassword === password;
  return !!validate;
};

/**
 * To validate username
 *  Usernames can only have:  Lowercase Letters (a-z)  Numbers (0-9)  Dots (.) Underscores (_) Length 1-15
 * can start with only alphabet or underscore
 */
export const onValidUsername = (val) => {
  const usernameRegex = /^[A-Za-z0-9]{5,20}$/;
  return usernameRegex.test(val);
};

/**
 * To check Phone Number Validation
 *
 * @param {string} string
 * @returns {boolean}
 */
export const validatePhoneNumber = (string) => {
  const validate = String(string).match(
    /^\+?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4,6}$/im
  );
  return !!validate;
};

/**
 * To check string contain only numbers
 *
 * @param {string} string
 * @returns {boolean}
 */
export const validateNumber = (string) => {
  const validate = String(string).match(/^[0-9]*$/);
  return !!validate;
};
export const getHighlightedMention = (text) => {
  var pattern = /\B@[a-z0-9_-]+/gi;
  const s = text.match(pattern);
  const parts = text?.split(new RegExp(" "));

  const checkStyle = (text, arrayStr) => {
    const isMention = arrayStr?.filter((a) => a === text);
    if (isMention?.length > 0) return { color: "#00DAEA" };
    else return {};
  };

  return (
    <span>
      {" "}
      {parts?.map((part, i) => (
        <span key={i} style={checkStyle(part, s)}>
          {part}{" "}
        </span>
      ))}{" "}
    </span>
  );
};

export const replaceMentionWithValue = (str) => {
  let newStr = str;
  const nameAvailable = newStr.match(/((.)\[([^[]*)]\(([^(^)]*)\))/g);
  if (nameAvailable?.length) {
    for (let i = 0; i < nameAvailable?.length; i++) {
      const newName = newStr.match(/((.)\[([^[]*)]\(([^(^)]*)\))/i)[3];
      newStr = newStr.replace(/((.)\[([^[]*)]\(([^(^)]*)\))/i, `@${newName} `);
    }
  }
  return newStr;
};

/**
 * To check string contain only letters
 * Vaidates for a-z and A-Z and white space
 *
 * @param {string} string
 * @returns {boolean}
 */
export const validateLetters = (string) => {
  const validate = String(string).match(/^[a-zA-Z ]{2,30}$/);
  return !!validate;
};

export const formatCategoryName = (name) => {
  if (name) {
    let tempName = name.replace("-", " ");
    tempName = tempName.charAt(0).toUpperCase() + tempName.slice(1);
    return tempName;
  }
  return "";
};
