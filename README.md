# hrext06-myCruddyApp
Create Read Update Delete using localStorage with JS, HTML and CSS


## To Do List

### Current Sprint
(the unchecked boxes are required to finish)
- [x] Form with input fields
- [x] Write to local storage
- [x] Read from local storage
- [x] Edit local storage
    - [ ] What about if we have more than one value?
    - [ ] how do we add multiple values?
        - [ ] maybe use an array?
        - [x] maybe use multiple keys? create new keyname each time

- [x] Delete local storage
    - [x] delete button storage.removeItem()
    - [x] delete all storage.clear()
- [x] Display stored value in proper div

### Next Sprint (what are we trying to code)
create a mood tracker:

	- periodically alerts you "How are you feeling?". Offers emojis for standard responses and an input field for when more specific answers are required

	- asks you what you are doing at the time and what you were doing just before

	- asks where you are feeling it in your body. does it have a color? a shape?
	- anything else you'd like to add?

	-set schedule for prompts

	-buzz off! button - skips this prompt but next prompt asks some questions about what was going on before

	-asks about how much sleep you got at first prompt of the day

	-asks about exercise at evening prompt - what? when? how long?

	-ask about meditation at night prompt - type? when? how long?

	- ask about food after meals


- [ ] set up "How you doing?" input field and submit button
- [ ] set up prompt schedule
// use setInterval to repeat every 86400000 milliseconds for daily reminder
	- [ ] "set sched" button and functionality
	- [ ] "set time" button for each prompt
- [ ] set up emoji reponses
- [ ] add "buzz off" button
- [ ] add buttons and fields for
	- [ ] sleep
	- [ ] exercise
	- [ ] meditation
	- [ ] food
- [ ]





- [ ] save my local storage to a remote storage for back up

- [ ] Optional: Host on repl.it (html,css, js)

----------------------------------------------------------

entry page

// need to start a new data set for each day

- [ ] how are feeling this morning?
- [ ] how much sleep did you get last night?
- [ ] did you meditate or exercise this morning?
- [ ] what are you looking forward to about today?
- [ ] how often would you like me to check in today?
  - [ ] setIterval for prompts
  [ ] 'submit button'
    [ ] format timestamp by date (dd/mm/yyyy);
  [ ] 'delete button
    [ ] delete by date

  prompts

  // need to store entered data as an object
    // time as key
      // prompt entries as nested object
      // keys set as how, what, before

- [ ]
