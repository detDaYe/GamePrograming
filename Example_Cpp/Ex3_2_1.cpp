#include <stdio.h>
#include <conio.h>

int main(void){
	char ch;
	do{
		printf("���õ� key�� �����ÿ�");
		ch = getch();
		printf("\nkey : %c, %d 0x%x\n", ch, ch, ch);
	}while(ch != '0');
	printf("0�� ������� ����? �׷��ٱ���? �˰ھ��.\n");
	return 0;
}
