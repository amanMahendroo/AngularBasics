import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'AngularBasics';
	lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	list = [{content: this.lorem, status: 0, color: "5px solid #333"}]
	colors = ["#333", "#0f8", "#ff0", "#f80", "#f00"]
	
	remove(index) {
		this.list.splice(index, 1)
	}

	add(event) {
		if (event.keyCode == 13 && event.target.value.length > 0) {
			this.list.push({content: event.target.value, status: 0, color: "5px solid #333"})
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

