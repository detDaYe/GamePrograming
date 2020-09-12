#include <stdio.h>
#include <conio.h>
#include <windows.h>

#include "setpos.cpp"

#define X_MAX 70
#define Y_MAX 20

void move_arrow_key(int ch, int *x, int *y, int x_limit, int y_limit);

int main(void){
	system("title Ex 3_2_4");
	int key = 0;
	int x = 10, y = 20;
	do{
		
		gotoxy(1, 30);
		printf("(%d, %d)", x, y);
		gotoxy(x, y);
		printf("A");
		key = getch();
		if(key == 0 || key == 0xe0) key = getch();
		system("cls");
		move_arrow_key(key, &x, &y,X_MAX, Y_MAX);
		
		
	}while(key != '0');
	return 0;
}

void move_arrow_key(int ch, int *x, int *y, int x_limit, int y_limit){
	switch(ch){
		case 72: //UP
			*y = *y - 1;
			if(*y < 1) *y = 1;
			break;
		case 75: //LEFT
			*x = *x - 1;
			if(*x < 1) *x = 1;
			break;
		case 77: // RIGHT
			*x = *x + 1;
			if(*x > x_limit) *x = x_limit;
			break;
		case 80: // DOWN
			*y = *y + 1;
			if(*y > y_limit) *y = y_limit;
			break;
	}
}
