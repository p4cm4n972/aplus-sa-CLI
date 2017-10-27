import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl: './app-home.component.html',
    styleUrls: ['./app-home.component.css']
})
export class HomeComponent implements OnInit {
    public pageTitle: string = 'Accueil';

    ngOnInit(): void {
        console.log('init');
    }
}
