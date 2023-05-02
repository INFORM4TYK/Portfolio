export default function Custom404() {
    if(typeof window !== 'undefined'){
		window.location = '/';
	}
	return null;
  }