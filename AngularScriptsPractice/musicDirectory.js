<!-- Controller as a method, handling information -->

angular.module('directoryApp', [])	
	.Controller('controllerApp', function(){
		var dirList =this; 
		dirList.list= [
					{Artist: 'The Smiths', Album: 'Meat Is Murder', Year: 1985},
					{Artist: 'Radiohead', Album: 'OK Computer' , Year: 1998  },
					{Artist: 'Tupac Shakur' , Album: 'Greatest Hits' , Year: 2001},
					{Artist: 'MF Doom' , Album: 'Doomsday' , Year:1999 }]
					)};