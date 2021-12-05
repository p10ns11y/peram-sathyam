const title = 'அடடே அன்பு மழை';
const slug = title.replaceAll(' ', '-');
const date = new Date('2021-03-05').toLocaleDateString('en-gb');

const poem = `
வெளியே போக முடியாதபடி

இடி மின்னலுடன்

கொட்டும் மழையை திட்டுகிறாய்!


வெளியே போக தோணாதபடி

மின்மினி கண்கள்

குழலின் குரலுடன் - அறைக்குள்

கொட்டும் உன் அன்பு மழையை

கையில் கிட்டிய குடையை

தலைகீழ் பிடித்து

சேகரித்து கொண்டிருக்கிறேன்!


பேரொலியும் பேரொளியும்

என் கவனம் ஈர்க்காதபடி

எப்படி நீ கட்டிப் போடுகிறாயோ!

      - உனதன்பன் பெரமு
`;

export { title, slug, date, poem };