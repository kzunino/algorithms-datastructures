/* 
CTCI - 3.6

Animal Shelter

An animal shelter, which holds only dogs and cats, operates on a strictly "first in first out" basis.
people must adopt either the oldest (based on arrival time) of animas at the
shelter, or they can select whether they would prefer a dog or a cat. They cannot
select which animal they want. Create a data structure to maintain this system.


EXAMPLE
Input: 
Output: 

Input: 
Output:
Constraints: 
Edge Case: 

Time Complexity:
    enqueue() - O(n) for re-indexing
    pop() O(1)
    dequeueAny() O(1)

Space Complexity: O(1) 


Optimized version:
Time Complexity:
Space Complexity:

*/

class ShelterQueue {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
    this._id = 0;
  }

  enqueue(animal) {
    if (animal === 'Dog') {
      this.dogQueue.unshift({dog: {id: this._id}});
      this._id++;
    } else {
      this.catQueue.unshift({cat: {id: this._id}});
      this._id++;
    }
  }

  //dequeues the oldest animal
  dequeueAny() {
    let d = this.dogQueue[this.dogQueue.length - 1];
    let c = this.catQueue[this.catQueue.length - 1];

    if (d.dog.id < c.cat.id) {
      return this.dogQueue.pop();
    } else {
      return this.catQueue.pop();
    }
  }

  dequeueDog() {
    return this.dogQueue.pop();
  }

  dequeueCat() {
    return this.catQueue.pop();
  }
}

let animalShelter = new ShelterQueue();

animalShelter.enqueue('Dog');
animalShelter.enqueue('Cat');
animalShelter.enqueue('Dog');
animalShelter.enqueue('Cat');
animalShelter.enqueue('Cat');
animalShelter.enqueue('Cat');

console.log(animalShelter.dequeueAny());
console.log(animalShelter.dequeueAny());
console.log(animalShelter.dequeueAny());

console.log(animalShelter.dogQueue);
console.log(animalShelter.catQueue);

console.log(animalShelter.dequeueCat());
console.log(animalShelter.catQueue);
