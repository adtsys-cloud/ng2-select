import { Component } from '@angular/core';

let gettingStarted = require('html-loader!markdown-loader!../getting-started.md');

@Component({
  selector: 'demo-app',
  template: `
    <main class="bd-pageheader">
      <div class="container">
        <h1>adt-ng2-select</h1>
        <p>Accent insensitive fork of valor-software/ng2-select</p>
        <a class="btn btn-primary" href="https://github.com/adtsys-cloud/ng2-select">View on GitHub</a>
        <div class="row">
          <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=adtsys-cloud&repo=ng2-select&type=star&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
          <div class="col-lg-1"><iframe src="https://ghbtns.com/github-btn.html?user=adtsys-cloud&repo=ng2-select&type=fork&count=true" frameborder="0" scrolling="0" width="170px" height="20px"></iframe></div>
        </div>
      </div>
    </main>

    <div class="container">
      <section id="getting-started" [innerHtml]="gettingStarted"></section>

      <select-section class="col-md-12"></select-section>
    </div>

    <footer class="footer">
      <div class="container">
        <p class="text-muted text-center"><a href="https://github.com/adtsys-cloud/ng2-select">adt-ng2-select</a> is maintained by <a href="https://github.com/adtsys-cloud">adtsys-cloud</a>.</p>
      </div>
    </footer>
  `
})
export class AppComponent {
  public gettingStarted:string = gettingStarted;
  public ngAfterContentInit(): any {
    setTimeout(()=>{
      if (typeof PR !== 'undefined') {
        // google code-prettify
        PR.prettyPrint();
      }
    }, 150);
  }
}
