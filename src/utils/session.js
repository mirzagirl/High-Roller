class Session {
  constructor() {
    this.user = null;
  }

  saveSessionCred(userInfo) {
    this.user = userInfo;
    localStorage.setItem("authSession", JSON.stringify(this.user));
  }

  clearSessionCred() {
    this.user = null;
    localStorage.removeItem("authSession");
  }

  get getSessionCred() {
    const user = localStorage.getItem("authSession");
    if (user) {
      this.user = JSON.parse(user);
    }
    return this.user;
  }
}

const session = new Session();

export default session;
