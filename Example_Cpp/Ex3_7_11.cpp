#include <stdio.h>
#include <math.h>

int main(void)
{
  int i;
  long r0=1234, r1=4321, k=10000;
  for(i=1;i<=10;i++)
  {
	 r1=(r0*r1)%k;
	 printf("%5d\n", r1);
  } // 이 알고리즘은 어떤 알고리즘이지? 
  return 0;
}

