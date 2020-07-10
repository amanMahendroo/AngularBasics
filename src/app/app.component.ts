import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'AngularBasics';
	list = []

	remove(index) {
		this.list.splice(index, 1)
	}

	add(event) {
		if (event.keyCode == 13 && event.target.value.length > 0) {
			this.list.push(event.target.value)
			event.target.value = ""
		}
	}
}
