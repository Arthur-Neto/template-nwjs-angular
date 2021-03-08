import { Component, OnInit } from '@angular/core';

import { ConfigLoaderService } from './core/config-loader/config-loader.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title = 'TESTE';
    isDev = window.nw.process.versions['nw-flavor'] === 'sdk';

    versions = '' +
        'You are running NW.js (v' + window.nw.process.versions.nw + ' ' + window.nw.process.versions['nw-flavor'] + '), ' +
        'Node.js (v' + window.nw.process.versions.node + '), ' +
        'Chromium (v' + window.nw.process.versions.chromium + '), ';

    public links: any;

    constructor(
        private configLoaderService: ConfigLoaderService
    ) {
        this.links = [
            {
                title: 'Angular Tutorial',
                url: 'https://angular.io/tutorial'
            },
            {
                title: 'Angular CLI Documentation',
                url: 'https://angular.io/cli'
            },
            {
                title: 'NW.js Documentation',
                url: 'https://nwjs.io'
            }
        ];
    }

    public ngOnInit(): void {
        this.configLoaderService
            .getJSON()
            .subscribe(data => {
                this.title = data.title;
            }, (error) => alert(error.message));
    }

    public open(evt: any, link: any) {
        evt.preventDefault();
        window.nw.Shell.openExternal(link.url);
    }

    public openDevTools(evt: any) {
        evt.preventDefault();
        window.nw.Window.get().showDevTools();
    }
}
