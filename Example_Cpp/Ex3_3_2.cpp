#include <stdio.h>
#include <windows.h>

#include "setpos.cpp"

#define X_MAX 70
#define Y_MAX 30

void convert_and_print(int x, int y, char out);

int main(void){
	int a, b;
	printf("y = ax + b\n");
	printf("a is ..."); scanf("%d", &a);
	printf("b is ..."); scanf("%d", &b);
	
	system("cls");
	
	for(int x = -30; x <= 30; x++)convert_and_print(x, 0, '-');
	for(int y = -20; y <= 20; y++)convert_and_print(0, y, '|');
	convert_and_print(0, 0, '+');
	
	for(int x = -30; x<= 30; x++)
		convert_and_print(x, a * x + b, '*');
		
	gotoxy(-80, 1);
	
	return 0;
}

void convert_and_print(int x, int y, char out){
	int x_out, y_out;
	
	x_out = x + 40;
	y_out = -1 * y + 20;
	
	if(x_out < 1 || x_out > X_MAX) return;
	if(y_out < 1 || y_out > Y_MAX) return;
	gotoxy(x_out, y_out);
	printf("%c", out);
}
