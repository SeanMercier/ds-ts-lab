import {Friend, Colleague, EmailContact} from './myTypes'
import { friends, colleagues } from './01-basics'

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(friendsArray: Friend[]) {
    return friendsArray.map(friend => {
        friend.age += 1;
        return `${friend.name} is now ${friend.age}`;
      });
}

console.log(older(friends[0]))
console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(colleaguesArray: Colleague[], name: string, department: string, email: string) {
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

  function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW
  
  function findFriends(friendsArray: Friend[], friendfilter: (friend: Friend) => boolean): string[] {
    return friendsArray
      .filter(friendfilter) // Apply the callback function as the filtering condition
      .map(friend => friend.name); // Return the names of the filtered friends
  }
  
  console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
  console.log(findFriends(friends, (friend) => friend.age < 35));

  function addInterest(friend: Friend, newInterest: string): string[] {
    // Initialize interests array if it does not exist
    if (!friend.interests) {
      friend.interests = [];
    }
  
    // Add the new interest to the interests array
    friend.interests.push(newInterest);
  
    // Return the updated interests array
    return friend.interests;
  }

  console.log(addInterest(friends[0], 'Politics'))
  console.log(addInterest(friends[1], 'Travel'));

