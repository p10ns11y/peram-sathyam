const title = 'ஹைக்கூ கவிதைகள்';
const slug = title.replaceAll(' ', '-');
const date = new Date('2012-05-28').toLocaleDateString('en-gb');

const poem = `
காலத்திற்கும்
கருவை சுமக்கும்
கர்ப்பிணி ...
கவிதை !

மறைந்து இருந்து
பார்க்கும் மர்மம்
என்னவோ ...
பிறை !

காதலும் கானலும்
தோன்ற ஒரே
காரணம் ...
'முழு அக' எதிரொளிப்பு !


இனிப்பான
எச்சில் ...
தேன் !

வா
போ
இரு
காதலே !

{அருகில் வா ! நெஞ்சுக்குள் போ ! அங்கேயே இரு ! என் காதலே !}
`;

export { title, slug, date, poem };