#include <stdio.h>
#include <windows.h>

#include "setpos.cpp"

int main(){
	for(int i = 1; i <= 9; i++){
		gotoxy(35, 5 + i);
		printf("%d x %d = %2d", 3, i, 3 * i);
	}
	printf("\n");
	
	return 0;
}
