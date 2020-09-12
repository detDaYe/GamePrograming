#include <stdio.h>
#include <windows.h>

#include "setpos.cpp"

void draw_xy_line01(int a, int b);

int main(void){
	int a,b;
	printf("y = ax + b\n");
	printf("a is ... ");
	scanf("%d", &a);
	printf("b is ...");
	scanf("%d", &b);
	
	system("cls");
	draw_xy_line01(a, b);
	
	printf("\n");
}

void draw_xy_line01(int a, int b){
	int y;
	for(int x = 1; x <= 10; x++){
		y = a * x + b;
		gotoxy(x, y);
		printf("*");
	}
}
