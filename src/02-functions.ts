import {Friend, Colleague} from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(friendsArray: Friend[]): string[] {
    return friendsArray.map(friend => {
        friend.age += 1;
        return `${friend.name} is now ${friend.age}`;
      });
}

console.log(older(friends[0]))
console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(colleaguesArray: Colleague[], name: string, department: string, email: string): void {
    // Get the colleague with the highest extension
    const highestColleague = highestExtension(colleaguesArray);
    
    // Create a new colleague with the highest extension + 1
    const newColleague: Colleague = {
      name: name,
      department: department,
      contact: {
        email: email,
        extension: highestColleague.contact.extension + 1, // Increment extension by 1
      },
    };
  
    // Add the new colleague to the array
    colleaguesArray.push(newColleague);
  }

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

