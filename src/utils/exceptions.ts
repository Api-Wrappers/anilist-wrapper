class NotLoggedInException extends Error {
  constructor() {
    super("You cannot perform this action because you are not logged in");
    this.name = "NotLoggedInException";
  }
}

export { NotLoggedInException };
