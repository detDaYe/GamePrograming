#include <stdio.h>
#include <conio.h>

int main(void){
	
	int ch;
	do{
		ch = getch();
		if(ch == 0 || ch == 0xe0){
			ch = getch();
			printf("확장키 code : %d\n", ch);
		}else
			printf("아스키 code : %d\n", ch);
	}while(ch != '0');
	
	return 0;
}
