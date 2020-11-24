#include <stdio.h>

void ordenaDecrescente(int vetor[], int tamanho)
{
    for (int i = 1; i < tamanho + 1; i++)
    {
        for (int j = i; j < tamanho + 1; j++)
        {
            if (vetor[i] < vetor[j])
            {
                int temp = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = temp;
            }
        }
    }
}

void mostrarVetor(int vetor[], int tamanho)
{
    for (int i = 1; i < tamanho + 1 ; i++)
    {
        printf("%d ", vetor[i]);
    }
}

int main()
{
    int n;
    int vetor[5] = {n};
    int tamanho = sizeof(vetor) / sizeof(int);

    printf("Insira 5 numeros inteiros");
	printf("\n\n");
	for(n=1;n<6;n++){
		printf("Insira o %d° numero: ",n);
		scanf("%d",&vetor[n]);
	}

    printf("Vetor antes da ordenação: ");
    mostrarVetor(vetor, tamanho);
    printf("\n");

    ordenaDecrescente(vetor, tamanho);

    printf("Vetor depois da ordenação (decrescente): ");
    mostrarVetor(vetor, tamanho);
    printf("\n");

}