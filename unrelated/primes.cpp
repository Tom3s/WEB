#include <iostream>
#include <cmath>

const int NR_PRIMES = 78498;

bool is_prime(int &number){
    float sqroot = sqrt(number);
    for (int i = 3; i <= sqroot; i+=2)
    {
        if (number % i == 0)
        {
            return false;
        }
    }
    return true;
}

void generate_primes(int *primes)
{
    int array_index = 1;
    int number = 3;

    primes[0] = 2;

    for (; number < 1000000; number+=2)
    {
        if (is_prime(number))
        {
            primes[array_index] = number;
            array_index++;
        }
    }
}

int main(int argc, char const *argv[])
{
    int primes[NR_PRIMES];
    generate_primes(primes);

    int n;

    std::cin >> n;

    int p;
    unsigned long sum = 0;
    for (int i = 0; i < n; i++)
    {
        std::cin >> p;
        for (int j = 0; primes[j] <= p; j++)
        {
            sum += primes[j];
        }
        std::cout << sum << '\n';
        sum = 0;
    }
    
    // for (int i = 0; i < NR_PRIMES; i++)
    // {
    //     std::cout << primes[i] << '\n';
    // }

    return 0;
}
