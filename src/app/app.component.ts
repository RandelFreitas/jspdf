import { Component, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('content', {static: false}) el!: ElementRef;

  public x = "Barraca Sorriso do Sol";

  makePDF(){
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save("demo.pdf");
      }
    });
  }
}
