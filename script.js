let count = {
    id: 1
}

class Person {
    constructor(name, age) {
        let displayCol = document.getElementById("displayCol");
        this.name = name;
        this.age = age;

        let div = document.createElement("div");
        div.classList.add("col")

        div.innerHTML =
            `<div class="card" style="width: 18rem;">` +
            `<img src="https://via.placeholder.com/150" class="card-img-top" alt="...">` +
            `   <div class="card-body">` +
            `          <h5 class="card-title">${this.name}</h5>` +
            `  <p class="card-text"> My Age is ${this.age}</p> ` +
            ` <a href="#" class="btn btn-primary" id="myuser-${count.id}">Show Me</a>` +
            `      </div>`+
            `</div>`;

        displayCol.append(div)

        console.log(count.id)

        
        document.getElementById(`myuser-${count.id}`).addEventListener("click", function(){console.log(this)})
        document.getElementById(`myuser-${count.id}`).addEventListener("click", () => {console.log(this)})
        
        count.id +=1
    }

    increaseAge() {
        this.age = this.age + 1;
    }

    increaseAge2 = () => {
        this.age = this.age + 1;
    };
}

let me = new Person("Anunay", 31);
console.log(me);

// document.getElementById("create-class").addEventListener("click", function(){console.log(this.value)})
// document.getElementById("create-class").addEventListener("click", () => {console.log(this)})
document.getElementById("create-class").addEventListener("click", () => {
    tempPerson = new Person(
        document.getElementById("name").value,
        document.getElementById("age").value
    );
    console.log(tempPerson);
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
});
