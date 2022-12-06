let questions = 9;

let questionsLeft = ' [' + questions + ' questions left]';

let adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let verb = prompt('Please type a verb that does not end in -ing ' + questionsLeft);

questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let noun = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let noun2 = prompt('Please type in a different adjective'+ questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';


let adv1 = prompt('Please type in an adverb'+ questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let noun3 = prompt('Please type in a noun'+ questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let verb2 = prompt('Please type in a verb'+ questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let verb3 = prompt('Please type in a verb'+ questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';

let noun4 = prompt('Please type in a noun'+ questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';



alert('All done. Ready for the message?');

let sentence = "<h2>There once was a " + adjective;
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.'; 
sentence +=' They used ' +noun2 + " " + adv1 +'. ';
sentence +='Alas it was to no avail, as ' + noun3 + " "+verb2+ " " +noun4 +". ";
sentence+="And so the programmar " +verb3 + ". The End.";
document.write(sentence);