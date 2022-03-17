#
def demo()
    n = 10

    grid = {}

    coord = [1, 1]
    grid[coord] = "a"
    coord[0] = 2
    grid[coord] = "b"
    coord[0] = 1
    grid[coord] = "a"


    grid[[0, 0]] = "⌞"
    grid[[n - 1, n - 1]] = "⌝"

    print(stringify(grid, n))
end

def stringify(grid, n)
    rows = []
    (0...n).reverse_each do |y|
        row = []
        (0...n).each do |x|
            value = grid.fetch([x, y], "-")
            row.push(value)
        end

        rows.push(row)
    end

    rows.map { |row| row.join("") }.join("\n")
end

demo