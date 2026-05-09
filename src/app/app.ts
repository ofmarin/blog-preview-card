import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  banner : string = "./images/illustration-article.svg";
  user : string = "./images/image-avatar.webp";
  protected readonly title = signal('blog-preview-card');
}
