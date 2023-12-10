import { createDirectus, rest, readItem } from '@directus/sdk';

export const useDirectus = () => {

    const client = createDirectus('https://staging-backend.teamwell.co/').with(rest());

    return {
        client
    }
}