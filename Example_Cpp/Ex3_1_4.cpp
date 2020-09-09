#include <stdio.h>
#include <stdlib.h>
#include <conio.h>

int main(void){
	system("title Example 3_1_4");
	
	for(int j = 1; j <= 9; j++){
		system("cls");
		for(int i = 1; i <= 9; i++)
			printf("%d °öÇÏ±â %d´Â %d\n", j, i, j * i);
		printf("press any key to continue");
		getch();
	}
	return 0;
}
