import {friends, colleagues} from './01-basics'
import {Friend, Colleague} from './myTypes'

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')  ))
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'  ))

// Generic function to sort an array based on a comparison function
function sort<T>(data: T[], compare: (a: T, b: T) => number): T[] {
    // Create a shallow copy of the array and sort it
    return [...data].sort(compare);
}

// Example usage of sort
// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));

// Sort colleagues by extension number
console.log(
    sort<Colleague>(
      colleagues.current,
      (a, b) => a.contact.extension - b.contact.extension
    )
  );