import type { ChangeEvent } from 'react';
interface SearchProps {
    /**
     * The initial value of the search input
     * @default ''
     */
    defaultValue?: string;
    /**
     * Callback function invoked when the search input value changes
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
declare function Search({ defaultValue, onChange }: SearchProps): JSX.Element;
export default Search;
