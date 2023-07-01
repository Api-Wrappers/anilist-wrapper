class NotLoggedInException extends Error {
  constructor() {
    super("You cannot perform this action because you are not logged in");
    this.name = "NotLoggedInException";
  }
}

class NoIdException extends Error {
  constructor(type: string) {
    super(`No anilist ${type} id was provided!`);
    this.name = "NoIdException";
  }
}

export { NotLoggedInException, NoIdException };
