
import Image1 from './Photos/01.jpg'
import Image2 from './Photos/02.jpg'
import Image3 from './Photos/03.jpg'
import Image4 from './Photos/04.jpg'
import Image5 from './Photos/05.jpg'
import Image6 from './Photos/06.jpg'
import Image7 from './Photos/07.jpg'
import Image8 from './Photos/08.jpg'
import Image9 from './Photos/09.jpg'
import Image10 from './Photos/10.jpg'
import Image11 from './Photos/11.jpg'
import Image12 from './Photos/12.jpg'
import Image13 from './Photos/13.jpg'
import Image14 from './Photos/14.jpg'
import Image15 from './Photos/15.jpg'
import Image16 from './Photos/16.jpg'
import Image17 from './Photos/17.jpg'
import Image18 from './Photos/18.jpg'
import Image19 from './Photos/19.jpg'
import Image20 from './Photos/20.jpg'
import Image21 from './Photos/21.jpg'
import Image22 from './Photos/22.jpg'

var photo = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20, Image21, Image22];

export function photos(num) {
	
	return photo[num];
}

export function getNum(num) {
	if(num < 0) {
		num = photo.length-1;
	}
	else if(num > photo.length-1) {
		num = 0;
	}
	return num
}

export function statusUpdate(state) {
	if(state === ' PLAY ') {
		return state = ' PAUSE '
	}
	else return state = ' PLAY ' 

}