# PasswordGenerator
An interactive password generator with modals to keep user engaged and encourage "communicative bonding" with said program.

>link http://hawenger.github.io/PasswordGenerator

>OVERVIEW
    >img: Home Page (homepage.png) 
![Password Generator Main Page](../README/assets/images/homepage.png)
    >Description
    This is the main page to the password generator.  As prompts were a neccessary component, the user is given a button to initiate password generator prompts.

    >img: Modal One (promptscreenlength)
![Prompt One - Select Password Length](../README/assets/images/promptscreenlength.png)
![Prompt One - Password Length HTML](../README/assets/images/passwordlengthhtml.png)

    >Description
    This is the first modal, asking a user to select a password length between 8 and 128 characters.  I set min and max values on the label accordingly.  Users have the option of using built in up and down arrows to select number or type directly into box.  When number is typed, min and max values can be overridden.  I kept this override as most people follow the written parameters, "between 8 and 128 characters" and saw no drawbacks to leaving the "bug" in.  My thinking, setting stricter parameters would only add more lines of code, making the javascript more difficult to decipher later on, thus leaving more potential for greater bugs.  The value of '8' is automatically picked if user chooses to whiz past the screen. or make no selection.  A button labeled "Next", upon click, takes user to the second prompt.  An X in the corner of the screen is displayed, allowing user to close the prompt box at any time.

    >img: Modal Two (promotscreencharacters)
![Prompt Two - Select Characters](../README/assets/images/promptscreencharacters.png)

    >Description
    The second modal asks users to select the characters they would like to include in their password.  The user has the ability to select uppercase, lowercase, symbols and numbers using according checkboxes.  The checkboxes begin checked and remain so until user unchecks them.  A checked selection indicates that box and according label of "uppercase, lowercase, symbols or numbers" is selected.  No explanation is given as I felt this process was familiar and thus intuitive to user.  A button labeled "Next", upon click, takes user to third prompt. An X in the corner of the screen is displayed, allowing user to close the prompt box at any time.

    >JavaScript Notes
    I used charcodes to select numbers, uppercase letters & lowercase letters.  I used a string to select typically allowed password symbols and to avoid a long series of charcode concatenation as symbols charcodes exist in multiples segments of number sequences in charcode.

![Prompt Three - Select Generate Password](../README/assets/images/promptscreengeneratepassword.png)
    
    >Description
    The third modal brings the user to the final password prompt.  Am empty box displaying "Your Secure Password," place holder text, is featurede with a button below that reads, "Generate Password."  I wanted the user to have the opportunity to click to generate password instead of password autmoatically appearing after prompt series for multiple reasons.  One bing that, if user walks away after filling out prompts and the screen is left open, the new password won't be displayed on the screen until the user is present, engaged and ready to retrieve password.  I see this as a security measure.  The second is for the reinforcement that the password is in fact secure, the placeholder text inside the box does a great job of reinforcing that feeling.  The third is that I wanted the user to have another chance to interact with the program.  From my own personal experience, there is nothing more magical than feeling like your computer or that which your interacting is taking into careful consideration your selections.  I think it evokes a feeling of personalization.  An X in the corner of the screen is displayed, allowing user to close the prompt box at any time.

![Generated Password - Generated Password and Start Over Button](../README/assets/images/promptscreengeneratedpassword.png)

    >Description
    After the user clicks the "Generate Password" button, a password within the parameters selected by user is displayed in place of the placeholder text.  The user can then copy and past said password or click the generate button repeatedly to create new passwords within selected parameters.  Upon initial click, of "Generate Password," a button appears underneath the "Generate Password" button that reads, "Start Over."  User can click the "Start Over" button to return to modal one, the password length prompt or may click the ever present X in the corner of the screen to close the prompt box.  When user clicks the "Start Over" button, their previous selections remain including selected character length value, previous password in modal 3's textbox. While having old selections apparent might be beneficial in some instances as a reminder to previous choices, see *Improvement section under MISC for notes. The "Start Over" button remains unhidden as well, no longer requiring user to click "Generate Password" before appearing.

>*MISC

    >Closing Modals
    When modal is closed, screen will refresh in order to reset password length value to 8 on modal one, recheck character selection boxes on modal 2, clear any previous generated passwords on modal 3, reinstate modal 3's placeholder text and rehide modal 3's "Start Over" button.
    
    > Accesibility
    A huge consideration when making any website, I found the challenge of making modals accesible fun to tackle.  I used an array of aria labels to help those with screen readers identify the close boxes, hide unncessary visual clutter and identify buttons and their purpose.
    
    >*Improvement

        > Back Button 
        I'd like to include a back button between prompts.
        
        >*Start Over Function
        I'd like to add a function that resets the number value to 8 for password length on modal one, all boxes to checked for password character selection on modal two, reinstates the placeholder text on modal three as well as hides the "Start Over" button until "Generate Password is clicked."
        
        >Clipboard
        I'd like to add a clipboard function to modal three for easier copying of password.

    >Other Methods Considered
        
        >Text Adeventure Format
![Text Adventure - Main Screen](../README/assets/images/textadventuremain.png)
![Text Adventure - Example Prompt Screen](../README/assets/images/textadventureprompt.png)
![Text Adventure - ids & set states](../README/assets/images/textadventureids.png)
![Text Adventure - javascript overview](../README/assets/images/textadventurejavascript.png)
        I originally approached the project with the idea that I could use a text adventure format to move the user through a series of prompts, using states booleans to include or leaveout certain characters.  While possible and fun to write, I found that it was a lengthy process and opted to use the modal method instead, wanting to have most of my code rely on html and css as opposed to javascript for accesibilty reasons.
        
        >Number Selector (Slider)
![Number Slider - Generated Password and Start Over Button](../README/assets/images/slideridea.png)
![Number Slider - Placement Example Text Adventure](../README/assets/images/textadventurelength.png)
        I thought a slider selector instead of user inputing a number into a box might be a fun function to integrate into the Password Generator.  Ultimatley, I decided against it as slide functions can be frustrating to navigate on keyboards, with certain phones, on small screens and generally aren't the most user accesible.  However, this would have omitted to the bug mentioned in the modal one section, setting firm, visual paramteres for the user, making it near impossible to select fewer than 8 or more than 128 characters.

    >Modal Method
![Checkboxes - Deciding on modals and Checkboxes](../README/assets/images/integratedcheckbox.png)
        In the end, I settled on using modals for the Password Generator.  Wanting to rely more on HTML and CSS than javascript for accesibility reasons and minimize javascript objects.  This also allowed for what I felt was easier integration of user inputs and a quicker prompt process, i.e instead of user moving through a monotonous series of yes or no questions, user had the option to select legnth, then characters, then generate password.  A quick but still highly interactive process.

>References 
    >I used some code from the following sources:
        > https://www.youtube.com/watch?v=R1S_NhKkvGA
        > https://www.youtube.com/watch?v=duNmhKgtcsI
        > https://www.youtube.com/watch?v=iKo9pDKKHnc
        > https://www.youtube.com/watch?v=gLWIYk0Sd38
        > https://www.youtube.com/watch?v=MBaw_6cPmAw&t=572s
        > https://codepen.io/Caediel/pen/xxxraEb









