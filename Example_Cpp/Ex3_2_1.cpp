#include <stdio.h>
#include <conio.h>

int main(void){
	char ch;
	do{
		printf("제시된 key를 누르시오");
		ch = getch();
		printf("\nkey : %c, %d 0x%x\n", ch, ch, ch);
	}while(ch != '0');
	printf("0은 끝내라는 거죠? 그렇다구요? 알겠어요.\n");
	return 0;
}
