#include<stdio.h>
#include<stdlib.h>

int main(void){
	char ch;
	printf("문자를 입력하고 Enter를 누르십시오");
	scnaf("%c", &ch);
	system("cls");
	return 0;
}
