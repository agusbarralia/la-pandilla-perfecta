# Technical Design: Responsive Design

## Strategy
Verification-first approach:
1. Read each component
2. Analyze responsive utilities
3. Test visually in browser
4. Document issues
5. Fix issues
6. Re-test

## Tailwind Utilities to Check
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flexbox: `flex flex-col md:flex-row`
- Spacing: `px-4 md:px-8 lg:px-12`
- Typography: `text-base md:text-lg lg:text-xl`
- Display: `hidden md:block`

## Common Issues
- Missing responsive variants
- Fixed widths without max-width
- Images without responsive sizing
- Overflow from long words (use `break-words`)
- Z-index conflicts

## Testing Approach
1. Browser DevTools responsive mode
2. Test actual breakpoints: 375px (mobile), 768px (tablet), 1280px (desktop)
3. Check portrait and landscape
