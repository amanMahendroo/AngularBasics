import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'AngularBasics';
	list = [{content: "1", status: 0, color: "transparent"}]
	colors = ["transparent", "#0f8", "#ff0", "#f80", "#f00"]

	remove(index) {
		this.list.splice(index, 1)
	}

	add(event) {
		if (event.keyCode == 13 && event.target.value.length > 0) {
			this.list.push({content: event.target.value, status: 0, color: "transparent"})
			event.target.value = ""
		}
	}

	addStat(i, j) {
		this.list[i].status = j
		this.list[i].color = "5px solid " + this.colors[this.list[i].status];
		// (document.querySelector('.app-alerts') as HTMLElement).style.top = '150px';
		// console.log(this.list[i])
	}
}

