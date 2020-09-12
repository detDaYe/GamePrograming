#include <stdio.h>
#include <conio.h>
#include <windows.h>

int main(void){
	char *text = "color 1e";
	system(text);
	printf("아무 키나 눌러서 이전 색으로 되돌아가라");
	getch();
	system("color 07");
	return 0; 
}
