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

class TimeOutException extends Error {
  constructor(timeoutTime: number) {
    super(`Request timed out after ${timeoutTime}ms`);
    this.name = "TimeOutException";
  }
}

export { NotLoggedInException, NoIdException, TimeOutException };
