import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


/* This code snippet is adding an event listener to the document for the 'mousemove' event. When the
user moves the mouse, the callback function provided will be executed. */
document.addEventListener('mousemove', (event) => {
  const shadow = document.querySelector('.cursor-shadow') as HTMLElement;
  if (shadow) {
    shadow.style.left = `${event.pageX}px`;
    shadow.style.top = `${event.pageY}px`;
  }
});