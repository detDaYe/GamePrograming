#include<stdio.h>
#include<stdlib.h>

int main(void){
	char ch;
	printf("문자를 입력하고 Enter를 누르십시오");
	scanf("%c", &ch);
	system("cls");
	printf("입력된 문자 : %c\n", ch);
	return 0;
}
