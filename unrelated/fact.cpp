#include <iostream>

const int MAX = 1000000;

int main(int argc, char const *argv[])
{
    int count[MAX] = {0};

    int n;
    std::cin >> n;

    int answer = 0;

    int current_number;
    for (int i = 0; i < n; i++)
    {
        std::cin >> current_number;
        answer += count[current_number];
        count[current_number]++;
    }

    std::cout << answer << '\n';

    return 0;
}
