class Course {
  constructor(title, description, imageUrl, duration, level, modules) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.duration = duration;
    this.level = level;
    this.modules = modules;
  }
}

class Module {
  constructor(title, list) {
    this.title = title;
    this.list = list;
  }
}

module.exports = { Course, Module };
