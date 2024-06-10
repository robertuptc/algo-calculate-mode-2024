def calculate_mode(list_input):
    sorted_data = sorting_data(list_input)
    return getting_most_frequent(sorted_data)

def sorting_data(input_type):
    data_dict = {}
    
    for i in input_type:
        if i in data_dict:
            data_dict[i] += 1
        else:
            data_dict[i] = 1
    return data_dict


def getting_most_frequent(data):
    sorted_data = sorted(data.items(), key=lambda x:x[1], reverse=True)
    answer_list = []
    counter = 0
    for i in sorted_data:
        item = i[0]
        count = i[1]

        if count > counter:
            counter = count
            answer_list = []
            answer_list.append(item)
        elif count == counter:
            answer_list.append(item)
    return answer_list

