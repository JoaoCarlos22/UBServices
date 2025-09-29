import styled from "styled-components";

export const Container = styled.div`
	max-width: 900px;
	margin: 0 auto;
	padding: 2rem 1rem;
`;

export const Titulo = styled.h1`
	text-align: center;
	margin-bottom: 2rem;
`;

export const Lista = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
	gap: 1.5rem;
	list-style: none;
	padding: 0;
`;

export const Card = styled.li`
	background: #f7f7f7;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0,0,0,0.07);
	padding: 1.5rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: box-shadow 0.2s;
	&:hover {
		box-shadow: 0 4px 16px rgba(0,0,0,0.13);
	}
`;

export const Icone = styled.span`
	font-size: 2.5rem;
	margin-bottom: 0.7rem;
`;

export const Nome = styled.h2`
	font-size: 1.2rem;
	margin: 0 0 0.5rem 0;
	text-align: center;
`;

export const Descricao = styled.p`
	font-size: 1rem;
	color: #444;
	text-align: center;
`;
