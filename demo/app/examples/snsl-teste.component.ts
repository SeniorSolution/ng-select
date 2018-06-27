import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    selector: 'snsl-teste',
    templateUrl: './snsl-teste.component.html',
    styleUrls: []
})

export class SnslTesteComponent {
    cars = [
        {id: 0, nome: 'Fusquinhaaaaaaaaaaaaaaaaaaaaa'},
        {id: 1, nome: 'Paliooooooooooooooooooooooooo'},
        {id: 2, nome: 'Mercedezzzzzzzzzzzzzzzzzzzzzz'},
        {id: 3, nome: 'Golzinhoooooooooooooooooooooo'},
        {id: 4, nome: 'uninhoooooooooooooooooooooooo'},
    ]

    constructor() {

    };
}
