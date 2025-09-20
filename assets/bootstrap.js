import {
  registerControllers,
  startStimulusApp,
} from "vite-plugin-symfony/stimulus/helpers";
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

const blog = startStimulusApp();
registerControllers(
  blog,
  import.meta.glob("./controllers/*_(lazy)\?controller.[jt]s(x)\?"),
);
