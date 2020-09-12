#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void){
	srand(time(NULL)); // 도대체 이게 뭔데???
	for(int i = 0; i <= 15; i++) printf("%2d %5d\n", i rand());
	return 0; 
}
