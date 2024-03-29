export const formatDate = (dateDate: Date | undefined): string => {
    if (!dateDate) {
        return "01.01.01";
    }
    const date = new Date(dateDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}.${formattedMonth}.${year}`;
};
